import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Booking {
    id: string;
    customerName: string;
    customerEmail: string;
    date: string;
    timeSlot: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    isGroup: boolean;
}

interface PoolState {
    bookings: Booking[];
    addBooking: (booking: Omit<Booking, 'id' | 'status'>) => void;
    updateBooking: (id: string, updates: Partial<Booking>) => void;
    deleteBooking: (id: string) => void;
}

export const usePoolStore = create<PoolState>()(
    persist(
        (set) => ({
            bookings: [],
            addBooking: (booking) =>
                set((state) => ({
                    bookings: [
                        ...state.bookings,
                        {
                            ...booking,
                            id: Math.random().toString(36).substr(2, 9),
                            status: 'pending',
                            isGroup: booking.isGroup || false,
                        },
                    ],
                })),
            updateBooking: (id, updates) =>
                set((state) => ({
                    bookings: state.bookings.map((booking) =>
                        booking.id === id ? { ...booking, ...updates } : booking
                    ),
                })),
            deleteBooking: (id) =>
                set((state) => ({
                    bookings: state.bookings.filter((booking) => booking.id !== id),
                })),
        }),
        {
            name: 'pool-storage',
        }
    )
); 