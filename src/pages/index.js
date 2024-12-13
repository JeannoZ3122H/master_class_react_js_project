// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Loader2 } from "lucide-react";
import useGenerateText from "../hooks/useGenerateText";
import { useForm } from "react-hook-form";
import useGenerateImage from "../hooks/useGenerateImage";
import UseDownloadImage from "../hooks/useDownloadImage";

import { useState } from "react";

export default function Home() {
    const { register, handleSubmit } = useForm();
    const { generate: generateText, description, loading } = useGenerateText();
    const {
        generate: generateImage,
        url,
        loading: loadingImage,
    } = useGenerateImage();

    const onSubmit = (values) => {
        console.log(values);
        generateText(values.query);
        generateImage(values.query);
    };


// UPLOAD FILE IMG
    const [imageSrc, setImageSrc] = useState('emploi.png');
    const handleImageUpload = (event) => {
        const file = event.target.files[0];  // Récupère le premier fichier
        if (file) {
            const reader = new FileReader();
            // Dès que le fichier est chargé, on met à jour l'état pour afficher l'image
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            // Lire le fichier en tant qu'URL de données
            reader.readAsDataURL(file);
        }
    };
    const { downloadImg } = UseDownloadImage(imageSrc);

    return (
        <div>
            <div className="w-100">
                <h1 className="inp-label">Veuillez charger ici l'image</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Input pour choisir le fichier image */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="form-control ms-2"
                    />
                </form>
                {description && <p className="mt-4">{description}</p>}
            </div>

            <div
                className={
                    "vh-90 w-full bg-white flex flex-col items-center justify-center"
                }
            >
                <div className="image-download-tester">
                    <h1 className="title">Télécharger une image</h1>

                    {imageSrc && (
                        <div>
                            <img
                                src={imageSrc}
                                alt="Image download"
                                style={{ width: '350px', cursor: 'pointer' }}
                                onClick={downloadImg}
                            />
                        </div>
                    )}

                    <p>Cliquez sur l'image pour la télécharger.</p>
                </div>
            </div>

        </div>
    );
}
