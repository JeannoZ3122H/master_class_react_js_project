
const UseDownloadImage = (img = '') => {
    const downloadImg = () => {
        const link = document.createElement('a'); // Crée un élément de lien
        link.href = img; // Associe l'URL de l'image à ce lien
        link.download = img.split('/').pop(); // Utilise le nom du fichier comme nom pour le téléchargement
        link.click(); // Simule un clic sur le lien pour télécharger l'image
    };
    return { downloadImg };
};

export default UseDownloadImage;
