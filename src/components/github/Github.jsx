import React, { Component } from 'react';
import axios from 'axios';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer cfa1eb7c874aa45be49d5c2ea08b28c31234904a`,
  },
});

const ORGANIZATION = `
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
    }
  }
`;

export default class Footer extends Component {

    state = {
        path: 'the-road-to-learn-react/the-road-to-learn-react',
        organization: null,
        errors: null,
      };
    
      componentDidMount() {
        this.onFetchFromGitHub();
      }
    
      onChange = event => {
        this.setState({ path: event.target.value });
      };
    
      onSubmit = event => {
        // fetch data
    
        event.preventDefault();
      };

      onFetchFromGitHub = () => {
        axiosGitHubGraphQL
          .post('', { query: ORGANIZATION })
          .then(result =>
            this.setState(() => ({
              organization: result.data.data.organization,
              errors: result.data.errors,
            })),
          );
      }

    render(){
        
        const { path, organization, errors } = this.state;

      return (
          <div>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="url">
                    Show open issues for https://github.com/
                </label>
                <input
                    id="url"
                    type="text"
                    value={path}
                    onChange={this.onChange}
                    style={{ width: '300px' }}
                />
                <button type="submit">Search</button>
            </form>
            <hr />

            {organization ? (
          <Organization organization={organization} errors={errors} />
        ) : (
          <p>No information yet ...</p>
        )}
          </div>
      )
    }
  }

  const Organization = ({ organization }) => (
    <div>
      <p>
        <strong>Issues from Organization:</strong>
        <a href={organization.url}>{organization.name}</a>
      </p>
    </div>
  );