import create from 'zustand';

interface IdStore {
  id: number;
  incrementId: () => void;
}

const useIdStore = create<IdStore>(set => ({
  id: 0,
  incrementId: () => set(state => ({ id: state.id + 1 })),
}));

export default useIdStore;