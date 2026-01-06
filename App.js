import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView, Alert
} from "react-native";
import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("portfolio");
  const [isLogin, setIsLogin] = useState(true);
  const login = () => {
    Alert.alert("Logged in!");
  };
  const exit = () => {
    Alert.alert("exit");
  }
  const register = () => {
    Alert.alert("Registered!");
  };
  /* ================= AUTH ================= */
  if (screen === "auth") {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>
            {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
          </Text>
          <Text style={styles.subtitle}>
            {isLogin ? "Login to continue" : "Sign up to get started"}
          </Text>

          {!isLogin && (
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#94a3b8"
              style={styles.input}
            />
          )}

          <TextInput
            placeholder="Email"
            placeholderTextColor="#94a3b8"
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            style={styles.input}
          />

          {!isLogin && (
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#94a3b8"
              secureTextEntry
              style={styles.input}
            />
          )}

          {/* <TouchableOpacity style={styles.button}> */}
          {/* <Text style={styles.buttonText}>
              {isLogin ? "Login" : "Sign Up"}
            </Text> */}
          {/* </TouchableOpacity> */}

          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.switchText}>
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setScreen("portfolio")}>
            <Text style={styles.backText}>← Back to Portfolio</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="light" />
      </View>
    );
  }

  /* ================= PORTFOLIO ================= */
  return (
    <ScrollView style={{
      flex: 1, backgroundColor: "#0f172a",
      padding: 20,

    }}>
      {/* HERO */}
      <View style={styles.hero}>
        <Image
          source={require("./images/user.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Axmed Xassan</Text>
        <Text style={styles.role}>Software Engineer</Text>

        <TouchableOpacity
          style={{ height: 40, justifyContent: "center", alignItems: "center", backgroundColor: "lime", paddingHorizontal: 20, borderRadius: 20 }}
        onPress={() => setScreen("auth")}
        >
          <Text style={styles.loginBtnText}>Login / Sign Up</Text>
        </TouchableOpacity>



      </View>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#d7c8c8ff"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#94a3b8"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={{
        backgroundColor: "#09a40bff",
        paddingHorizontal: 26,
        paddingVertical: 10,
        borderRadius: 22,
        marginTop: 10,
      }}
        onPress={login}>
        <Text style={{
          textAlign: "center", color: "#0f172a",
          fontWeight: "bold",
        }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor: "#ffffffff",
        paddingHorizontal: 26,
        paddingVertical: 10,
        borderRadius: 22,
        marginTop: 10,
      }}
        onPress={register}>
        <Text style={{
          textAlign: "center", color: "#0f172a",
          fontWeight: "bold",
        }}>Register</Text>
      </TouchableOpacity>
      {/* <br/> */}
      <TouchableOpacity style={{
        backgroundColor: "#ee0c0cff",
        paddingHorizontal: 26,
        paddingVertical: 10,
        borderRadius: 22,
        marginTop: 10,

      }}
        onPress={exit}
      >
        <Text style={{
          textAlign: "center", color: "#0f172a",
          fontWeight: "bold",
        }}>Exit</Text>

      </TouchableOpacity>
      <Text style={{
        color: "#fff",
        fontSize: 38,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        marginRight: 60
      }}>      <Text style={{ color: "#048804ff", fontSize: 48, fontWeight: "bold", alignItems: "center" }}>SOM</Text><Text style={{ color: "#fff", fontSize: 48, fontWeight: "bold", alignItems: "center" }}>ALIL</Text><Text style={{ color: "#cf3c3cff", fontSize: 48, fontWeight: "bold", alignItems: "center" }}>AND</Text>
      </Text>

      {/* ABOUT */}
      {/* <Card title="About Me">
        Passionate Software Engineer building modern web & mobile apps.
        I focus on clean UI, performance, and great user experience.
      </Card> */}

      {/* SKILLS */}
      {/* <Card title="Skills">
        <View style={styles.skillGrid}>
          <Skill name="HTML" />
          <Skill name="CSS" />
          <Skill name="JavaScript" />
          <Skill name="React" />
          <Skill name="React Native" />
          <Skill name="Expo" />
        </View>
      </Card> */}

      {/* EXPERIENCE */}
      {/* <Card title="Experience">
        • Frontend Developer (2+ Years){"\n"}
        • Mobile App Developer{"\n"}
        • Freelance Web Designer
      </Card> */}

      {/* PROJECTS */}
      {/* <Text style={styles.sectionHeader}>Projects</Text> */}

      {/* <Project
        image="https://i.imgur.com/zYxDCQT.png"
        title="Portfolio App"
        desc="Personal portfolio mobile app with modern UI."
      />

      <Project
        image="https://i.imgur.com/Qs9XQZl.png"
        title="Business Website"
        desc="Responsive website for companies."
      />

      <Project
        image="https://i.imgur.com/N6hQ5zF.png"
        title="Login System"
        desc="Clean login & signup UI design."
      /> */}

      <StatusBar style="light" />
    </ScrollView>
  );
}

/* ================= COMPONENTS ================= */
// const Card = ({ title, children }) => (
//   <View style={styles.cardBox}>
//     <Text style={styles.cardTitle}>{title}</Text>
//     <Text style={styles.cardText}>{children}</Text>
//   </View>
// );

// const Skill = ({ name }) => (
//   <View style={styles.skill}>
//     <Text style={styles.skillText}>{name}</Text>
//   </View>
// );

// const Project = ({ image, title, desc }) => (
//   <View style={styles.projectCard}>
//     <Image source={{ uri: image }} style={styles.projectImage} />
//     <View style={styles.projectContent}>
//       <Text style={styles.projectTitle}>{title}</Text>
//       <Text style={styles.projectDesc}>{desc}</Text>
//     </View>
//   </View>
// );

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  portfolio: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  hero: {
    alignItems: "center",
    paddingVertical: 50,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },

  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  role: {
    color: "#94a3b8",
    marginBottom: 15,
  },

  loginBtn: {
    backgroundColor: "#c16d0eff",
    paddingHorizontal: 26,
    paddingVertical: 10,
    borderRadius: 22,
    marginTop: 10,
  },

  loginBtnText: {
    color: "#0f172a",
    fontWeight: "bold",
  },

  cardBox: {
    backgroundColor: "#020617",
    margin: 16,
    padding: 20,
    borderRadius: 20,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  cardText: {
    color: "#cbd5f5",
  },

  skillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  skill: {
    backgroundColor: "#0f172a",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 14,
    margin: 4,
  },

  skillText: {
    color: "#fff",
  },

  sectionHeader: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 10,
  },

  projectCard: {
    backgroundColor: "#020617",
    margin: 16,
    borderRadius: 20,
    overflow: "hidden",
  },

  projectImage: {
    width: "100%",
    height: 160,
  },

  projectContent: {
    padding: 16,
  },

  projectTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  projectDesc: {
    color: "#94a3b8",
    marginTop: 4,
  },

  /* AUTH */
  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#020617",
    padding: 30,
    borderRadius: 24,
  },

  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#0f172a",
    color: "#fff",
    padding: 14,
    borderRadius: 14,
    marginBottom: 14,
  },

  button: {
    backgroundColor: "#08ff08ff",
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#0f172a",
    fontWeight: "bold",
  },

  switchText: {
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 16,
  },

  backText: {
    color: "#38bdf8",
    textAlign: "center",
    marginTop: 14,
  },
});
