

const Analysis = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{marginTop:'20px', marginLeft:'230px', marginRight: '20px' }}>
        <h1 className="text-3xl">Most Ordered Dishes</h1>
        <iframe
          style={{
            background: '#FFFFFF',
            border: 'none',
            borderRadius: '2px',
            boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
            width: '480px',
            height: '520px'
          }}
          src="https://charts.mongodb.com/charts-project-0-xkpgg/embed/charts?id=660e7c31-dac9-4def-80de-c55df186191c&maxDataAge=3600&theme=light&autoRefresh=true"
          title="MongoDB Atlas Chart"
        ></iframe>
      </div>
      <div style={{marginTop:'20px'}}>
        <h1 className="text-3xl">Ingredients for Top most Dish</h1>
        <iframe
          style={{
            background: '#FFFFFF',
            border: 'none',
            borderRadius: '2px',
            boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
            width: '480px',
            height: '320px'
          }}
          src="https://charts.mongodb.com/charts-project-0-xkpgg/embed/charts?id=6612deb3-c6a6-42a8-8ca8-f448d5b41050&maxDataAge=60&theme=light&autoRefresh=true"
          title="Second MongoDB Atlas Chart"
        ></iframe>
      </div>
    </div>
  );
};

export default Analysis;
