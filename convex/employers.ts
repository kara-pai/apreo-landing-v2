import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getByUserId = query({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    return ctx.db
      .query("employers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
  },
});

export const upsertStep1 = mutation({
  args: {
    userId: v.id("users"),
    companyName: v.string(),
    contactName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    tradeType: v.string(),
    serviceArea: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("employers")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .unique();

    const now = Date.now();

    if (existing) {
      await ctx.db.patch(existing._id, { ...args, updatedAt: now });
      return existing._id;
    }

    return ctx.db.insert("employers", {
      ...args,
      status: "draft",
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const upsertStep2 = mutation({
  args: {
    userId: v.id("users"),
    apprenticeLevel: v.optional(v.string()),
    preferredStart: v.optional(v.string()),
    workEnvironments: v.optional(v.array(v.string())),
    certifications: v.optional(v.array(v.string())),
    hiringFrequency: v.optional(v.string()),
  },
  handler: async (ctx, { userId, ...data }) => {
    const existing = await ctx.db
      .query("employers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();

    if (!existing) throw new Error("Employer profile not found. Complete step 1 first.");

    await ctx.db.patch(existing._id, { ...data, updatedAt: Date.now() });
    return existing._id;
  },
});

export const submit = mutation({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    const existing = await ctx.db
      .query("employers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();

    if (!existing) throw new Error("Employer profile not found.");

    await ctx.db.patch(existing._id, {
      status: "submitted",
      updatedAt: Date.now(),
    });
  },
});

export const listByStatus = query({
  args: { status: v.string() },
  handler: async (ctx, { status }) => {
    return ctx.db
      .query("employers")
      .withIndex("by_status", (q) =>
        q.eq(
          "status",
          status as "draft" | "submitted" | "under_review" | "approved" | "rejected"
        )
      )
      .collect();
  },
});
