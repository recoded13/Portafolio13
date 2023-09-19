const API_BASE_URL = 'http://localhost:8082/api/v1/proyectos'; 

// Función para enviar un nuevo proyecto al servidor
export const createProject = async (projectData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error('Error al crear el proyecto');
    }

    const responseBody = await response.text(); // Leer la respuesta como texto

    if (responseBody.trim() === '') {
      // Si la respuesta está vacía, devolver un valor predeterminado o un mensaje
      return { message: 'Proyecto creado con éxito' };
    }

    const createdProject = await response.json();
    return createdProject;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// Función para obtener la lista de proyectos desde el servidor
export const getProjects = async () => {
  try {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      throw new Error('Error al obtener la lista de proyectos');
    }

    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para obtener un proyecto por su ID
export const getProjectById = async (projectId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${projectId}`);

    if (!response.ok) {
      throw new Error('Error al obtener el proyecto');
    }

    const project = await response.json();
    return project;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para actualizar un proyecto en el servidor
export const updateProject = async (projectId, projectData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el proyecto');
    }

    const updatedProject = await response.json();
    return updatedProject;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para eliminar un proyecto en el servidor
export const deleteProject = async (projectId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${projectId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el proyecto');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

