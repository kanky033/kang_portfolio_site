const DownloadButton = ({ resume }) => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = resume;
      link.download = "Kang's Resume";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <button className="connect-with-me" onClick={handleDownload}>
        Resume
      </button>
    );
  };
  export default DownloadButton