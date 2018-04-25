import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

const GithubMainDiv = styled.div`
    min-height: 100vh;
    text-align: center;
    width: 100%;
    
    .organizationInputLabel {
        font-size: 300%;
        margin: 3vmax;
        font-family: 'Anton', sans-serif;
        background-color: white;
        border-radius: 1vmax;
        padding: 2vmax;
        border: .2vmax solid black;
        line-height: 120%

        @media only screen and (max-width: 767px) {
          font-size: 150%;
      }
    }

    .githubAddy {
      font-family: 'Anton', sans-serif;
      background-color: white;
      border-radius: 1vmax;
      padding: .5vmax;
      font-size: 150%;
      border-radius: 1vmax;
      padding: 1vmax;
      color: red;

     
      @media only screen and (max-width: 767px) {
        font-size: 120%;
        background-color: transparent;
        line-height: 120%;
        padding: .3vmax;
      }
    }

    .howTo {
      margin-top: 1vmax;
      font-weight: bold;
      font-size: 120%;

      @media only screen and (max-width: 767px) {
        font-size: 80%;
        color: black;
        line-height: 100%;
        font-weight: bold;
      }
    }

    .organizationInput {
      width: 300px;
    }

    .issuesFrom {
      text-align: left;
      text-size: 100%;
      margin: 2vmax;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      background-color: white;
      border-radius: 1vmax;
      padding: 1vmax;
      border: .2vmax solid black;
      

      a {
        margin-left: 1vmax;
        font-weight: bold;
      }
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
     
    li {
      font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
      border-bottom: 1px solid #ccc;
    }
     
    li:last-child {
      border: none;
    }
     
    li a {
      text-decoration: none;
      color: #000;
      display: block;
      width: 200px;
     
      -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
      -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
      -o-transition: font-size 0.3s ease, background-color 0.3s ease;
      -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
      transition: font-size 0.3s ease, background-color 0.3s ease;
    }
     
    li a:hover {
      font-size: 30px;
      background: #f6f6f6;
    }
`

const getIssuesOfRepositoryQuery = (organization, repository) => `
  {
    organization(login: "${organization}") {
      name
      url
      repository(name: "${repository}") {
        name
        url
        issues(last: 5) {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    }
  }
`;

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
})

const getIssuesOfRepository = path => {
  const [organization, repository] = path.split('/');

  return axiosGitHubGraphQL.post('', {
    query: getIssuesOfRepositoryQuery(organization, repository),
  })
}

const resolveIssuesQuery = queryResult => () => ({
  organization: queryResult.data.data.organization,
  errors: queryResult.data.errors,
})

export default class Github extends Component {

    state = {
        path: 'informationdesignus/mockRepo',
        organization: null,
        errors: null,
      }
    
      componentDidMount() {
        this.onFetchFromGitHub(this.state.path)
      }
    
      onChange = event => {
        this.setState({ path: event.target.value })
        console.log(this.state)
      }
    
      onSubmit = event => {
        this.onFetchFromGitHub(this.state.path)
    
        event.preventDefault()
      }

      onFetchFromGitHub = path => {
        getIssuesOfRepository(path).then(queryResult =>
          this.setState(resolveIssuesQuery(queryResult)),
        );
      };

    render(){
        
        const { path, organization, errors } = this.state

      return (

        <GithubMainDiv>
          <Container>
          <div>

            <form onSubmit={this.onSubmit}>
                <label htmlFor="url">
                  <div className="organizationInputLabel">  Show open issues for:</div>
                </label>
                <span className="githubAddy"> https://github.com/
                <input
                    id="url"
                    type="text"
                    value={path}
                    onChange={this.onChange}
                    className="organizationInput"
                />
                <button type="submit">Search</button>
                </span>
            </form>
            <div className="howTo">
              (Enter organization/repository)   Example: informationdesignus/mockRepo
            </div>

            {organization ? (
          <Organization organization={organization} errors={errors} />
        ) : (
          <p>No information yet ...</p>
        )}
          </div>
          </Container>
          </GithubMainDiv>

      )
    }
  }

  const Organization = ({ organization, errors }) => {
    if (errors) {
      return (
        <p>
          <strong>Something went wrong:</strong>
          {errors.map(error => error.message).join(' ')}
        </p>
      )
    }
  
    return (
      <div>
        <p className="issuesFrom">
          <strong >Issues from Organization:</strong>
          <a href={organization.url}>{organization.name}</a>
        </p>
        <Repository repository={organization.repository} />
      </div>
    )
  }

  const Repository = ({ repository }) => (
    <div>
      <p className="issuesFrom">
        <strong>In Repository:</strong>
        <a href={repository.url}>{repository.name}</a>
      </p>
  
      <ul className="issuesFrom">
        {repository.issues.edges.map(issue => (
          <li key={issue.node.id}>
            <a href={issue.node.url}>{issue.node.title}</a>
          </li>
        ))}
      
      </ul>
    </div>
    
  )