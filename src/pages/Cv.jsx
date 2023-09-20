import '../Styles.css'

const Cv = () => {
  const pdfUrl = '../public/CV-Adán-Sánchez.pdf'; 


  return (
    <div>
      <h1>Estoy en la página Curriculum Vitae</h1>
      <p>Aquí tienes mi currículum en PDF:</p>
      <embed src={pdfUrl} width="100%" height="500" />
    </div>
  );
};

export default Cv;