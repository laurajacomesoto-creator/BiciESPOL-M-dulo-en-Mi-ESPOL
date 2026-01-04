
import React, { useRef, useState } from 'react';
import { Icons } from '../constants';

interface AddEvidenceViewProps {
  onSave: () => void;
}

const AddEvidenceView: React.FC<AddEvidenceViewProps> = ({ onSave }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <div className="flex flex-col h-full px-8 animate-in slide-in-from-right duration-500">
      <h2 className="text-2xl font-bold text-center mt-8 mb-16 leading-tight">Añadir evidencia de<br/>devolución</h2>

      <div className="flex-1 flex flex-col items-center">
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" 
          ref={fileInputRef} 
          onChange={handleFileChange}
          className="hidden" 
        />
        
        <button 
          onClick={handleCameraClick}
          className="w-64 h-64 bg-transparent border-2 border-white rounded-[40px] flex items-center justify-center active:scale-95 transition-transform group overflow-hidden"
        >
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="text-white scale-[3.5] group-hover:scale-[3.8] transition-transform">
              <Icons.Camera />
            </div>
          )}
        </button>
        
        {previewUrl && (
          <button 
            onClick={() => setPreviewUrl(null)}
            className="mt-4 text-red-500 text-xs font-bold uppercase tracking-widest"
          >
            Tomar otra foto
          </button>
        )}
      </div>

      <button 
        onClick={onSave}
        disabled={!previewUrl}
        className={`w-full py-4 font-black rounded-xl transition-all mb-4 tracking-widest uppercase ${previewUrl ? 'bg-gray-300 text-black active:scale-95' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
      >
        Guardar evidencia
      </button>
    </div>
  );
};

export default AddEvidenceView;
