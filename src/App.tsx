import { Aside } from './components/aside';
import { Main } from './components/main';

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4">
      <aside className="col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-1 lg:col-span-1 overflow-y-auto bg-secondary">
        <Aside />
      </aside>
      <main className="col-span-1 sm:col-span-1 md:col-span-2 xl:col-span-3 lg:col-span-3 bg-primary p-4 sm:p-6 lg:p-8">
        <Main />
      </main>
    </div>
  )
}

export default App;