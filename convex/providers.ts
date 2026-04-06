import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getByUserId = query({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    return ctx.db
      .query("providers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
  },
});

export const upsertStep1 = mutation({
  args: {
    userId: v.id("users"),
    rtoName: v.string(),
    rtoNumber: v.string(),
    contactName: v.string(),
    contactRole: v.optional(v.string()),
    email: v.string(),
    phone: v.optional(v.string()),
    programs: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("providers")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .unique();

    const now = Date.now();

    if (existing) {
      await ctx.db.patch(existing._id, { ...args, updatedAt: now });
      return existing._id;
    }

    return ctx.db.insert("providers", {
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
    providerNumber: v.optional(v.string()),
    qualification: v.optional(v.string()),
    funding: v.optional(v.array(v.string())),
    placementDescription: v.optional(v.string()),
    bottleneck: v.optional(v.string()),
    usiSync: v.optional(v.boolean()),
    whiteCardSync: v.optional(v.boolean()),
  },
  handler: async (ctx, { userId, ...data }) => {
    const existing = await ctx.db
      .query("providers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();

    if (!existing) throw new Error("Provider profile not found. Complete step 1 first.");

    await ctx.db.patch(existing._id, { ...data, updatedAt: Date.now() });
    return existing._id;
  },
});

export const submit = mutation({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    const existing = await ctx.db
      .query("providers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();

    if (!existing) throw new Error("Provider profile not found.");

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
      .query("providers")
      .withIndex("by_status", (q) =>
        q.eq(
          "status",
          status as "draft" | "submitted" | "under_review" | "approved" | "rejected"
        )
      )
      .collect();
  },
});
