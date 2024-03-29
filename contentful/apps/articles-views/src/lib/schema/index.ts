import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const articleViewsTable = sqliteTable("articleviews", {
  id: integer("id").primaryKey(),
  slug: text("slug").notNull(),
  ipAddress: text("ip_address").notNull(),
  referer: text("referer").notNull(),
  country: text("country").notNull(),
  device: text("device").notNull(),
  browser: text("browser").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`
  ),
});

export interface IArticleViews {
  id: number;
  slug: string;
  ipAddress: string;
  referer: string;
  country: string;
  device: string;
  browser: string;
  createdAt: Date | null;
}
