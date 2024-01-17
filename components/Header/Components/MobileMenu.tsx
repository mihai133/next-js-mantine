import React from 'react';
import { Box, Button, Center, Collapse, Divider, Drawer, Group, ScrollArea, UnstyledButton, rem, useMantineTheme } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from '../HeaderMegaMenu.module.css';

function MobileMenu(props: any) {
  const { drawerOpened, closeDrawer, toggleLinks, linksOpened, links } = props;
  const theme = useMantineTheme();
  return (
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="lg"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" m="10" style={{ fontWeight: 'bold' }}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="/dashboard" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button fullWidth variant="default">Log in</Button>
            <Button fullWidth>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
  );
}

export default MobileMenu;
