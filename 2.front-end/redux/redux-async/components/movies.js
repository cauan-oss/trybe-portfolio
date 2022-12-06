//src/components/Movies.js

import { fetchMovies } from './redux/actions';

// ...
class Movies extends Component {
  // ...
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMovies()); // enviando a action fetchMovies
  }
  // ...
}
// ...
export default connect()(Movies)