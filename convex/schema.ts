import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ─── Users ─────────────────────────────────────────
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    role: v.union(v.literal("employer"), v.literal("provider")),
    avatarUrl: v.optional(v.string()),
    onboardingCompleted: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_clerkId", ["clerkId"])
    .index("by_email", ["email"])
    .index("by_role", ["role"]),

  // ─── Employer Profiles ─────────────────────────────
  employers: defineTable({
    userId: v.id("users"),
    companyName: v.string(),
    contactName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    tradeType: v.string(),
    serviceArea: v.optional(v.string()),
    // Step 2: Hiring Needs
    apprenticeLevel: v.optional(v.string()),
    preferredStart: v.optional(v.string()),
    workEnvironments: v.optional(v.array(v.string())),
    certifications: v.optional(v.array(v.string())),
    hiringFrequency: v.optional(v.string()),
    // Status
    status: v.union(
      v.literal("draft"),
      v.literal("submitted"),
      v.literal("under_review"),
      v.literal("approved"),
      v.literal("rejected")
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_status", ["status"]),

  // ─── Training Provider Profiles ────────────────────
  providers: defineTable({
    userId: v.id("users"),
    rtoName: v.string(),
    rtoNumber: v.string(),
    contactName: v.string(),
    contactRole: v.optional(v.string()),
    email: v.string(),
    phone: v.optional(v.string()),
    programs: v.optional(v.array(v.string())),
    // Step 2: Compliance
    providerNumber: v.optional(v.string()),
    qualification: v.optional(v.string()),
    funding: v.optional(v.array(v.string())),
    placementDescription: v.optional(v.string()),
    bottleneck: v.optional(v.string()),
    usiSync: v.optional(v.boolean()),
    whiteCardSync: v.optional(v.boolean()),
    // Status
    status: v.union(
      v.literal("draft"),
      v.literal("submitted"),
      v.literal("under_review"),
      v.literal("approved"),
      v.literal("rejected")
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_status", ["status"]),

  // ─── Placements ────────────────────────────────────
  placements: defineTable({
    employerId: v.id("employers"),
    providerId: v.optional(v.id("providers")),
    studentName: v.string(),
    trade: v.string(),
    certLevel: v.optional(v.string()),
    status: v.union(
      v.literal("proposed"),
      v.literal("interview"),
      v.literal("placed"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
    startDate: v.optional(v.string()),
    notes: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_employerId", ["employerId"])
    .index("by_providerId", ["providerId"])
    .index("by_status", ["status"]),

  // ─── Documents ─────────────────────────────────────
  documents: defineTable({
    ownerId: v.id("users"),
    ownerType: v.union(v.literal("employer"), v.literal("provider")),
    name: v.string(),
    type: v.string(),
    storageId: v.optional(v.string()),
    verified: v.boolean(),
    expiresAt: v.optional(v.number()),
    createdAt: v.number(),
  })
    .index("by_ownerId", ["ownerId"])
    .index("by_ownerType", ["ownerType"]),
});
