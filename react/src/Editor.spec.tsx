import { expect, test } from '@playwright/experimental-ct-react';
import Editor from './Editor';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<Editor />);
  await expect(component).toContainText('Hello world!');
});
