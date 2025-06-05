// app/(child)/_layout.tsx
import { Ionicons } from '@expo/vector-icons'; // atau ikon lain
import { Tabs } from 'expo-router';
import { ChildProvider } from '../lib/context/childContext';

export default function ChildTabsLayout() {
  return (
    <ChildProvider>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Beranda',
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          }}
        />
      <Tabs.Screen
        name="parentInfo"
        options={{
          title: 'Orang Tua',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Laporan',
          tabBarIcon: ({ color, size }) => <Ionicons name="document-text" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Pengaturan',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          title: 'Aktivitas',
          tabBarIcon: ({ color, size }) => <Ionicons name="pulse" color={color} size={size} />,
        }}
      />
    </Tabs>
    </ChildProvider>
  );
}
