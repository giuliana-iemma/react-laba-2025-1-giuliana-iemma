import AvatarGrid from '@/components/AvatarGrid';
import Navigation from '@/components/Navigation';

function App() {
  return (
    <>
      <Navigation />

      <section>
        <h1 className="app-title">Avatar App</h1>
        <AvatarGrid />
      </section>
    </>
  );
}

export default App;
