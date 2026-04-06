import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("placements").order("desc").take(50);
  },
});

export const listByEmployer = query({
  args: { employerId: v.id("employers") },
  handler: async (ctx, { employerId }) => {
    return ctx.db
      .query("placements")
      .withIndex("by_employerId", (q) => q.eq("employerId", employerId))
      .collect();
  },
});

export const create = mutation({
  args: {
    employerId: v.id("employers"),
    providerId: v.optional(v.id("providers")),
    studentName: v.string(),
    trade: v.string(),
    certLevel: v.optional(v.string()),
    startDate: v.optional(v.string()),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return ctx.db.insert("placements", {
      ...args,
      status: "proposed",
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("placements"),
    status: v.union(
      v.literal("proposed"),
      v.literal("interview"),
      v.literal("placed"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
  },
  handler: async (ctx, { id, status }) => {
    await ctx.db.patch(id, { status, updatedAt: Date.now() });
  },
});
