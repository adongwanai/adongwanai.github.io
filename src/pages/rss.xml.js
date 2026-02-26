import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const notes = await getCollection('vibecoding');
    return rss({
        title: '阿东玩AI - Vibe Coding',
        description: '大模型算法工程师 | AI Agent 开发者 | Vibe Coding 实践者',
        site: context.site,
        items: notes.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate || new Date(),
            description: post.data.description,
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/vibecoding/[slug]` routes
            link: `/vibecoding/${post.slug}/`,
        })),
        // (optional) inject custom xml
        customData: `<language>zh-cn</language>`,
    });
}
