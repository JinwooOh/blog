import { defineDb, defineTable, column } from 'astro:db';

const Comment = defineTable({
	columns: {
		id: column.number({ primaryKey: true, autoIncrement: true }),
		postSlug: column.text(),
		author: column.text(),
		email: column.text(),
		content: column.text(),
		createdAt: column.date({ default: new Date() }),
	},
});

export default defineDb({
	tables: {
		Comment,
	},
});

