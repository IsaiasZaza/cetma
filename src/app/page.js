"use client"

import { useState } from "react";
import { TextField, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import { FiMail, FiLock, FiUser } from 'react-icons/fi'; // Using react-icons for modern icons


export default function Home() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Função para abrir/fechar o modal de cadastro
  const toggleModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex"
      style={{
        backgroundImage: "url('/aa.jpg')", // Substitua pelo caminho correto da imagem
      }}
    >
      {/* Modal de Login */}
      <div className="ml-auto h-full flex items-center">
        <div className="bg-white p-24 max-w-5xl shadow-3xl h-[100%] mb-48 rounded-es-[45%] flex flex-col justify-center">
          <div className="w-full justify-center">
            <Typography variant="h3" align="center" gutterBottom color="primary" fontWeight={600}>
              CETMA
            </Typography>
            <Typography variant="h6" align="center" color="primary" gutterBottom>
              Login
            </Typography>

            <form className="w-full">
            {/* Email Field */}
            <TextField
              label="Digite seu email"
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
              required
              InputProps={{
                endAdornment: <FiMail className="text-gray-400" />,
              }}
            />

            {/* Password Field */}
            <TextField
              label="Digite sua senha"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
              required
              InputProps={{
                endAdornment: <FiLock className="text-gray-400" />,
              }}
            />

            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: "12px",
                marginTop: "16px",
                background: "linear-gradient(135deg, #3f51b5, #1a237e)",
                '&:hover': {
                  background: "linear-gradient(135deg, #1a237e, #3f51b5)"
                },
              }}
            >
              Entrar
            </Button>
          </form>

            {/* Links adicionais */}
            <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
              <a
                href="#"
                className="hover:underline"
                onClick={toggleModal} // Abre o modal de cadastro
              >
                Não tem conta? <span className="text-blue-600">Cadastre-se</span>
              </a>
              <a href="#" className="hover:underline text-blue-600">
                Redefina sua senha
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Cadastro com Animações */}
      <Dialog
        open={isRegisterModalOpen}
        onClose={toggleModal}
        TransitionComponent={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DialogTitle>
          Cadastro
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleModal}
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
        <form className="w-full">
            {/* Name Field */}
            <TextField
              label="Digite seu nome"
              type="text"
              fullWidth
              variant="outlined"
              margin="normal"
              required
              InputProps={{
                endAdornment: <FiUser className="text-gray-400" />,
              }}
            />

            {/* Email Field */}
            <TextField
              label="Digite seu email"
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
              required
              InputProps={{
                endAdornment: <FiMail className="text-gray-400" />,
              }}
            />

            {/* Password Field */}
            <TextField
              label="Digite sua senha"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
              required
              InputProps={{
                endAdornment: <FiLock className="text-gray-400" />,
              }}
            />

            {/* Register Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: "12px",
                marginTop: "16px",
                background: "linear-gradient(135deg, #3f51b5, #1a237e)",
                '&:hover': {
                  background: "linear-gradient(135deg, #1a237e, #3f51b5)"
                },
              }}
            >
              Criar Conta
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleModal} color="secondary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
