import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { UserInfoAction } from './UserInfoAction';

export default { title: 'UserInfoAction' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={UserInfoAction} />;
}
