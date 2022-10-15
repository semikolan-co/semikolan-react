const Spinner = () => (
  <div className='w-full text-center p-5 text-green-500 loader'>
    <div
      className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-500 text-center'
      role='status'
    >
      <span className='visually-hidden'>Loading...</span>
    </div>
  </div>
);

export default Spinner;
