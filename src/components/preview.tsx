import { useEffect, useRef } from 'react';
import './preview.css';

interface PreviewProps {
  code: string;
}

const html = `
    <html>
    <head>
    </head>
    <body>
      <div id="root"></div>
      <script>
        window.addEventListener('message', (event) => {
          try{
            eval(event.data);
          } catch(err) {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
            console.error(err);
          }
        }, false);
      </script>
    </body>
    </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className={'preview-wrapper'}>
      <iframe
        ref={iframe}
        srcDoc={html}
        title="preview"
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default Preview;
