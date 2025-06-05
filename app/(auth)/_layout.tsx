import { Stack } from "expo-router";
import { AuthProvider } from "../lib/context/authContext";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Stack>
    
        <Stack.Screen
          name="index"
          options={{
            title: "Login",
            headerShown: false,
            headerTitleAlign: "center",
            headerLeft: () => null, // sembunyikan tombol kembali
            headerRight: () => null, // sembunyikan tombol lainnya
            headerStyle: {
              backgroundColor: "#f8f8f8", // ganti dengan warna yang diinginkan
            },
            headerTintColor: "#333", // ganti dengan warna ikon yang diinginkan
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
       
        <Stack.Screen
          name="resetPassword"
          options={{
            title: "Atur Ulang Kata Sandi",
            headerShown: true,
            headerTitleAlign: "center",
            headerLeft: () => null, // sembunyikan tombol kembali
            headerRight: () => null, // sembunyikan tombol lainnya
            headerStyle: {
              backgroundColor: "#f8f8f8", // ganti dengan warna yang diinginkan
            },
            headerTintColor: "#333", // ganti dengan warna ikon yang diinginkan
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />   
        <Stack.Screen
          name="register"
          options={{
            title: "Daftar",
            headerShown: true,
            headerTitleAlign: "center",
            headerLeft: () => null, // sembunyikan tombol kembali
            headerRight: () => null, // sembunyikan tombol lainnya
            headerStyle: {
              backgroundColor: "#f8f8f8", // ganti dengan warna yang diinginkan
            },
            headerTintColor: "#333", // ganti dengan warna ikon yang diinginkan
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="registerSuccess"
          options={{
            title: "Pendaftaran Berhasil",
            headerShown: true,
            headerTitleAlign: "center",
            headerLeft: () => null, // sembunyikan tombol kembali
            headerRight: () => null, // sembunyikan tombol lainnya
            headerStyle: {
              backgroundColor: "#f8f8f8", // ganti dengan warna yang diinginkan
            },
            headerTintColor: "#333", // ganti dengan warna ikon yang diinginkan
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="registerSuccessChild"
          options={{
            title: "Pendaftaran Berhasil",
            headerShown: true,
            headerTitleAlign: "center",
            headerLeft: () => null, // sembunyikan tombol kembali
            headerRight: () => null, // sembunyikan tombol lainnya
            headerStyle: {
              backgroundColor: "#f8f8f8", // ganti dengan warna yang diinginkan
            },
            headerTintColor: "#333", // ganti dengan warna ikon yang diinginkan
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />      


      </Stack>
    </AuthProvider>
  );
};

export default AuthLayout;
