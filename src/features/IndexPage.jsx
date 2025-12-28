import { Link } from 'react-router-dom'

const IndexPage = ({data}) => {
  const { title, subtitle, actions, service, path, params } = data;

  const indexData = service.index(path, params);
  console.log(indexData);
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {
        actions && (
          <div>
            {
              actions.map((action) => (
                <Link to={action.path} key={action.label}>
                  {action.label}
                </Link>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default IndexPage;