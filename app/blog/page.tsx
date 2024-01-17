import { Box, Button, Card, Container, Flex, Group, Stack, Text } from '@mantine/core';
import { draftMode } from 'next/headers';
import { fetchBlogPosts } from '../contentful/blogPostQueries';
import Link from 'next/link';
import classes from './Blog.module.css';
import RichText from '../contentful/RichText';

async function Blog() {
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

  return (
    <Container>
      <Box className="p-[6vw]">
        <div className="prose">
          <h1>My Contentful blog</h1>
          <ul>
            {blogPosts.map((post) => (
              <Card withBorder radius="md" p="md" className={classes.card}>
                {post.image && (
                  <img 
                    src={post.image.src} 
                    srcSet={`${post.image.src}?w=300 1x, ${post.image.src} 2x`}
                    alt={post.image.alt} 
                  />
                    )}
                  <Flex
                      mih={50}
                      justify="flex-start"
                      align="flex-start"
                      direction="column"
                      wrap="wrap"
                      className={classes.textcard}
                    >
                    <Text fz="xl" fw={600}>
                      {post.title}
                    </Text>
                    <RichText document={post.description}/>
                  </Flex>            
                <Group mt="xs">
                  <Link href={`/blog/${post.slug}`}>
                    <Button radius="md" style={{ flex: 1 }}>
                      See blog post
                    </Button>
                  </Link>
                </Group>
              </Card>
            ))}
          </ul>
        </div>
      </Box>
    </Container>

    
  )
}

export default Blog;