import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { ButtonMenu } from './ButtonMenu';

export default { title: 'ButtonMenu' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ButtonMenu} />;
}
