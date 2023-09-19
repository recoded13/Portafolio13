import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Styles.css'

const EditProject = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState({
    nombreProyecto: '',
    descripcion: '',
    webProyecto: '',
    github: '',
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/v1/proyectos/${projectId}`);
        setProjectData(response.data);
      } catch (error) {
        console.error('Error al obtener el proyecto:', error);
      }
    };

    fetchProject();
  }, [projectId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza la solicitud de actualización al backend
      await axios.put(`http://localhost:8082/api/v1/proyectos/${projectId}`, projectData);
      // Redirige al usuario a la página de proyectos después de la actualización
      window.location.href = '/projects';
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
    }
  };

  return (
    <div>
      <h1>Editar Proyecto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Proyecto</label>
          <input
            type="text"
            name="nombreProyecto"
            value={projectData.nombreProyecto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción del Proyecto</label>
          <textarea
            name="descripcion"
            value={projectData.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Enlace Web del Proyecto</label>
          <input
            type="url"
            name="webProyecto"
            value={projectData.webProyecto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Enlace Git</label>
          <input
            type="url"
            name="github"
            value={projectData.github}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditProject;
