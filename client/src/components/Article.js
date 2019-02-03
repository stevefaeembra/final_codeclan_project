import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Article extends Component {
  handleEdit(article){
    debugger;
  }
  render(){
    const onEditClicked = this.handleEdit(this.props.article);
    return (
    <div className="article">
      <div className="article-header">
        {this.props.article.title}
      </div>
      <div className="article-bottom">
        <div className="article-body">
          <div className="article-date">
            {this.props.article.date}
          </div>
          <div className="article-description">
          {this.props.article.description}
          </div>
        </div>
        <div className="article-image">
          <img src={this.props.article.imagelink} />
        </div>
        <div className="article-footer">
          <div className="buttons">
          <Button variant="contained" color="primary" className="button" onClick={onEditClicked}>
              Edit
          </Button>
          <Button variant="contained" color="secondary" className="button">
              Delete
          </Button>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Article;