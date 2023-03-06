import { Component } from 'react';
import './search-box.styles.css';
class SearchBox extends Component {
    state = {  } 
    render() { 
        const { onChangeHandler } = this.props;
        const { placeholder } = this.props;
        const { className } = this.props;

        return (
            <input
            type="search"
            className={'search-box '+ className}
            placeholder={placeholder}
            onChange={onChangeHandler}
          />
        );
    }
}
 
export default SearchBox;