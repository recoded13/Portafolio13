import { useState } from 'react';
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} from './ProjectService';
import '../Styles.css';

const ProjectForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombreProyecto: '',
    imagen: '',
    descripcion: '',
    enlaceWeb: '',
    enlaceGit: '',
    herramientas: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleHerramientasChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        herramientas: [...formData.herramientas, name],
      });
    } else {
      setFormData({
        ...formData,
        herramientas: formData.herramientas.filter((herramienta) => herramienta !== name),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clona el formData para eliminar la propiedad "imagen" si está vacía
    const dataToSubmit = { ...formData };
    if (dataToSubmit.imagen === '') {
      delete dataToSubmit.imagen;
    }

    try {
      // Envía los datos al backend
      const createdProject = await createProject(dataToSubmit);

      // Limpia el formulario después de enviar
      setFormData({
        nombreProyecto: '',
        imagen: '',
        descripcion: '',
        enlaceWeb: '',
        enlaceGit: '',
        herramientas: [],
      });

      // Realiza cualquier otra acción que necesites después de la creación del proyecto
      // Por ejemplo, mostrar un mensaje de éxito o redirigir a otra página.
      console.log('Proyecto creado:', createdProject);
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      // Manejo de errores: Puedes mostrar un mensaje de error al usuario o realizar otras acciones.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Formulario de Proyecto</h2>
      <div>
        <label>Nombre del Proyecto</label>
        <input
          type="text"
          name="nombreProyecto"
          value={formData.nombreProyecto}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Imagen Previsualizada</label>
        <input
          type="file"
          accept="image/*"
          name="imagen"
          onChange={handleChange}
        />
        {formData.imagen && (
          <img src={URL.createObjectURL(formData.imagen)} alt="Previsualización" />
        )}
      </div>
      <div>
        <label>Descripción del Proyecto</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Enlace Web del Proyecto</label>
        <input
          type="url"
          name="webProyecto"
          value={formData.webProyecto}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Enlace Git</label>
        <input
          type="url"
          name="github"
          value={formData.github}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Herramientas Utilizadas</label>
        <div>
          <input
            type="checkbox"
            name="React"
            checked={formData.herramientas.includes('React')}
            onChange={handleHerramientasChange}
          />
          <label>React</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="JavaScript"
            checked={formData.herramientas.includes('JavaScript')}
            onChange={handleHerramientasChange}
          />
          <label>JavaScript</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="API"
            checked={formData.herramientas.includes('API')}
            onChange={handleHerramientasChange}
          />
          <label>API</label>
        </div>
        {/* Agrega más herramientas */}
      </div>
      <button type="submit">Agregar Proyecto</button>
    </form>
  );
};

export default ProjectForm;
