const VideoCard = () => {
    return (
        <div className="rounded-lg overflow-hidden">
            <img
                src="https://fatweb.s3.amazonaws.com/vestibularfatec/assets/img/layout/2sem25/og-image.jpg"
                alt="Thumb vídeo"
                className="w-full"
            />
            <div className="p-2 flex gap-2">
                <img
                    src="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2022/08/cps-logo-identidade.jpg"
                    alt="Ícone do canal"
                    className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div>
                    <h3 className="font-semibold text-sm">Vestibular Fatec Cotia | 2º Semestre 2025</h3>
                    <p className="text-sm text-gray-600">Fatec Cotia</p>
                    <p className="text-sm text-gray-500">5 mil visualizações • há 2 dias</p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
