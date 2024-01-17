'use client';

import { Switch, rem, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
      <Switch
        checked={colorScheme === 'light' && true}
        onChange={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        defaultValue={computedColorScheme}
        size="lg"
        thumbIcon={
          colorScheme === 'light' ? (
            <IconMoon
              style={{ width: rem(16), height: rem(16) }}
              stroke={3}
            />
          ) : (
            <IconSun
              style={{ width: rem(16), height: rem(16) }}
              stroke={3}
            />
          )
        }
      />
  );
}
