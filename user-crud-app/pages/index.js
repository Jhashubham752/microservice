import Head from "next/head";
import Image from "next/image";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

// Importing custom fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Dashboard</title>
        <meta name="description" content="A modern Next.js dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Container className="py-5">
            {/* Logo Section */}
            <Row className="justify-content-center mb-4">
              <Col md={6} className="text-center">
                <Image
                  className={styles.logo}
                  src="/next.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                  priority
                />
                <h2>Welcome to the Next.js Dashboard</h2>
              </Col>
            </Row>

            {/* Main Features Cards */}
            <Row>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Get Started</Card.Title>
                    <Card.Text>
                      Begin by exploring our features and creating user data.
                    </Card.Text>
                    <Button variant="primary" href="/users/add" className="w-100">
                      Add User
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Documentation</Card.Title>
                    <Card.Text>
                      Learn more about Next.js and how to build scalable apps.
                    </Card.Text>
                    <Button
                      variant="secondary"
                      href="https://nextjs.org/docs"
                      target="_blank"
                      className="w-100"
                    >
                      Read Docs
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Deploy Your App</Card.Title>
                    <Card.Text>
                      Easily deploy your application to the cloud.
                    </Card.Text>
                    <Button
                      variant="success"
                      href="https://vercel.com/new"
                      target="_blank"
                      className="w-100"
                    >
                      Deploy Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Footer Links */}
            <Row className="justify-content-center mt-4">
              <Col md={6} className="text-center">
                <footer className={styles.footer}>
                  <a
                    href="https://nextjs.org/learn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn
                  </a>
                  <a
                    href="https://vercel.com/templates?framework=next.js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Examples
                  </a>
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to Next.js → 
                  </a>
                </footer>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </>
  );
}
