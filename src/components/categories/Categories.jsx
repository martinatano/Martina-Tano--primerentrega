import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from '../../mocks/categorias.json';
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, loading } = useAsyncMock(categories)

    if (loading) return <CircularProgress />

    return (<div className="container">
        <div className="home-container">
            <div className="home-content">
                <h1>Bienvenido a Cafetería Marleene</h1>
                <p>Lo mejor en café y repostería.</p>
            </div>
        </div>
        <div className="categories-container">
      <Typography variant="h2" style={{ color: "#8f8C8C" }}>
        Categorias
      </Typography>
      {data.map((category) => (
        <Card key={category.id} className="category-card">
          <CardContent component={Link} to={`/category/${category.category}`} className="category-link">
            <Typography className="category-text">{category.category}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>);
}

export default Categories;