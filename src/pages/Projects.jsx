import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importa useHistory

import '../Styles.css'

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/v1/proyectos');
        setProjects(response.data);
      } catch (error) {
        console.error('Error al obtener proyectos:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleDeleteProject = async (projectId) => {
    try {
      // Realiza la solicitud de eliminación al backend
      await axios.delete(`http://localhost:8082/api/v1/proyectos/${projectId}`);
      // Actualiza la lista de proyectos después de la eliminación
      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
    }
  };

  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.nombreProyecto}</h2>
            <p>{project.descripcion}</p>
            <p>{project.webProyecto}</p>
            <p>{project.github}</p>
            {/* Agregar botón de editar */}
            <Link className='editar' to={`/editproject/${project.id}`}>Editar</Link>
            {/* Agregar botón de borrar */}
            <button className='borrar' onClick={() => handleDeleteProject(project.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default Projects;
