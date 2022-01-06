import { isDev } from './helper';
import GridVisualizer from './GridVisualizer';

export default function debugInit() {
  if (isDev) {
    document.querySelector('body').classList.add('debug', 'debug-screens');

    const websiteGrid = new GridVisualizer({
      numberColumns: 12,
      containerCSsClass: 'container-1100-px',
      rowCssClass: 'flex gap-x-4',
      columnsCssClass: 'w-1/12',
      columnsCssClassCustom: null,
    });
    websiteGrid.init();
  }
}
