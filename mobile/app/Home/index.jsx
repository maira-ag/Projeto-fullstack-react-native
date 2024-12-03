import React from "react";
import { Text, View, StyleSheet, Image, FlatList, Pressable, ScrollView } from "react-native";
import { Link } from "@react-navigation/native"; // Certifique-se de usar react-navigation

const playlists = [
  { id: 0.1, title: "hitou", imageUrl: "https://i.pinimg.com/736x/9f/ab/1b/9fab1b3a77c165e340a360f9f858ca27.jpg" },
  { id: 0.2, title: "relax", imageUrl: "https://i.pinimg.com/736x/1e/5f/77/1e5f77a5b721c93418305a84b3e98abe.jpg" },
  { id: 0.3, title: "bora bill", imageUrl: "https://i.pinimg.com/736x/fb/cc/43/fbcc43003276a217c2c80b241342f53c.jpg" },
  { id: 0.4, title: "eu na festa", imageUrl: "https://i.pinimg.com/736x/b4/95/3e/b4953e8094f898822279a8858981e26c.jpg" },
  { id: 0.5, title: "funkão", imageUrl: "https://i.pinimg.com/736x/57/cd/ee/57cdee0de311c266dabe4ed09e9aeb1e.jpg" },
  { id: 0.6, title: "chorei mto", imageUrl: "https://i.pinimg.com/736x/93/04/ee/9304eef15300a3d722f806069c7d715e.jpg" },
  { id: 0.7, title: "emocionou", imageUrl: "https://i.pinimg.com/736x/88/3d/08/883d0866ce8aef9e33f0edfec9f353a3.jpg" },
  { id: 0.8, title: "é o amor", imageUrl: "https://i.pinimg.com/736x/f3/e4/f3/f3e4f3b6d021f19710afff9a55f89c4c.jpg" },
  { id: 0.9, title: "só tem no brasil", imageUrl: "https://i.pinimg.com/736x/43/ba/73/43ba73c0bf497967c12a03eb4cb09f32.jpg" },
];

const Artistas = [
  { id: 1.1, title: "Kendrick Lamar", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022" },
  { id: 1.2, title: "Beyoncé", imageUrl: "https://i.scdn.co/image/ab67616d00001e02f5220893852002a2a3078bab" },
  { id: 1.3, title: "Linkin Park", imageUrl: "https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/09/20240905-ovicio-linkin-park.webp?resize=555%2C555&ssl=1" },
  { id: 1.4, title: "Charli xcx", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb936885667ef44c306483c838" },
  { id: 1.5, title: "Rihanna", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb99e4fca7c0b7cb166d915789" },
  { id: 1.6, title: "Childish Gambino", imageUrl: "https://i.scdn.co/image/ab6761610000e5ebc3dc5429b676b16d451e5f77" },
  { id: 1.7, title: "SZA", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0895066d172e1f51f520bc65" },
  { id: 1.8, title: "Jhené Aiko", imageUrl: "https://i.scdn.co/image/ab6761610000e5ebbc7ca5ae34cffbb572660ee3" },
  { id: 1.9, title: "Caroline Polachek", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5da901a1dd949436f2377f72" },
  { id: 1.11, title: "Ms. Lauryn Hill", imageUrl: "https://i.pinimg.com/736x/c5/e1/62/c5e16206dabce482e52ef58ceb9afe27.jpg" },
];

const Álbuns = [
  { id: 2.1, title: "gnx", imageUrl: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58" },
  { id: 2.2, title: "COWBOY CARTER", imageUrl: "https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599" },
  { id: 2.3, title: "From Zero", imageUrl: "https://i.scdn.co/image/ab67616d0000b273b11a5489e8cb11dd22b930a0" },
  { id: 2.4, title: "brat", imageUrl: "https://i.scdn.co/image/ab67616d0000b27388e3822cccfb8f2832c70c2e" },
  { id: 2.5, title: "Tara e Tal", imageUrl: "https://i.scdn.co/image/ab67616d0000b2735d8edb7dfcaf8791af149853" },
  { id: 2.6, title: "Blonde", imageUrl: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526" },
  { id: 2.7, title: "ANTI", imageUrl: "https://i.scdn.co/image/ab67616d0000b2737b688587a6754481c53f6bb7" },
  { id: 2.8, title: "DAMN.", imageUrl: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699" },
  { id: 2.9, title: "The Misseducation of Lauryn Hill", imageUrl: "https://i.scdn.co/image/ab67616d0000b273e08b1250db5f75643f1508c9" },
  { id: 2.11, title: "RENAISSANCE", imageUrl: "https://i.scdn.co/image/ab67616d0000b2730e58a0f8308c1ad403d105e7" },
];

const Músicas = [
  { id: 3.1, title: "HOWLING", imageUrl: "https://i.scdn.co/image/ab67616d00001e02f3e7b35d19758748f642299f" },
  { id: 3.2, title: "fue mejor (feat. SZA)", imageUrl: "https://i.scdn.co/image/ab67616d0000b273e08b58aa5d1e7ba01bc45c53" },
  { id: 3.3, title: "Ex-Factor", imageUrl: "https://i.scdn.co/image/ab67616d0000b273e08b1250db5f75643f1508c9" },
  { id: 3.4, title: "Hit Me Where It Hurts", imageUrl: "https://i.scdn.co/image/ab67616d0000b2737d983e7bf67c2806218c2759" },
  { id: 3.5, title: "NiGHT MARé", imageUrl: "https://i.scdn.co/image/ab67616d0000b2735d8edb7dfcaf8791af149853" },
  { id: 3.6, title: "MY HOUSE", imageUrl: "https://i.scdn.co/image/ab67616d0000b2730e05818e7479f703c800a3ff" },
  { id: 3.7, title: "The Worst In Me (feat. Tinashe)", imageUrl: "https://i.scdn.co/image/ab67616d0000b2732b9aca3204e667980ce6a939" },
  { id: 3.8, title: "Sativa", imageUrl: "https://i.scdn.co/image/ab67616d00001e027ccc8005498d9f75b03333c2" },
  { id: 3.9, title: "Chanel", imageUrl: "https://i.scdn.co/image/ab67616d0000b273a0b780c23fc3c19bd412b234" },
  { id: 3.11, title: "Baby By Me", imageUrl: "https://i.scdn.co/image/ab67616d0000b2732d202280da38d4f3fbc64b18" },
];

const TelaHome = () => {
  const renderPlaylist = (data, isArtist = false) => (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={{ alignItems: "flex-start" }}
      renderItem={({ item }) => (
        <Pressable style={styles.itemCard}>
          <Image
            style={[styles.itemImage, isArtist && styles.artistImage]}
            source={{ uri: item.imageUrl }}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>{item.title}</Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Bem-vindo ao echo</Text>
        <Link to="/telaPerfil" style={styles.profileLink}>
          <Text style={styles.profileText}>Meu Perfil</Text>
          <Image source={require('../../assets/images/userIcon.png')} style={styles.profileImage} />
        </Link>
      </View>

      <Text style={styles.sectionTitle}>Músicas</Text>
      {renderPlaylist(Músicas)}

      <Text style={styles.sectionTitle}>Artistas</Text>
      {renderPlaylist(Artistas, true)}

      <Text style={styles.sectionTitle}>Álbuns</Text>
      {renderPlaylist(Álbuns)}

      <Text style={styles.sectionTitle}>Playlists</Text>
      {renderPlaylist(playlists)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0b071b",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#5732f1",
  },
  profileLink: {
    backgroundColor: "#5732f1",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 150,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  profileText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "regular",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  itemCard: {
    marginRight: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 120,
  },
  itemImage: {
    width: "90%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 5,
  },
  artistImage: {
    borderRadius: 60,
  },
  itemText: {
    color: "#fff",
    marginTop: 5,
    textAlign: "center",
    marginBottom: 10,
  },
  logo: {
    width: 70,
    height: 70,
  },
  profileImage: {
    width: 30,
    height: 30
  }
});

export default TelaHome;
