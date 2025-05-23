import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { NavbarMinimalColored } from './NavbarMinimalColored';

export default { title: 'NavbarMinimalColored' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarMinimalColored} />;
}
