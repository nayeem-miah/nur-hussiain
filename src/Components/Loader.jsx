import {DNA } from 'react-loader-spinner'
const Loader = ({ loading }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">

      <DNA
        visible={true}
        loading={loading}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
