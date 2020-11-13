import User from '../models/User';
import NotesView from './NotesView';

export default {
  render(user: User) {
    return {
      id: user.user_id,
      username: user.user_username,
      password: user.user_password,
      notes: NotesView.renderMany(user.notes)
      
    };
  },

  renderMany(users: User[]) {
    return users.map((user) => this.render(user));
  },
};