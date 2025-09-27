import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Target, BookOpen, TrendingUp, Clock, Star, Users, Award, ArrowRight, Play, Download, Zap, Brain, Trophy, Shield, AlertTriangle, Frown, BookX, BarChart3, Monitor, PieChart } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="bg-yellow-500 text-black font-bold px-4 py-2 text-sm mb-6">
                🔥 RETA FINAL DO ENEM 2025
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Domine os conteúdos que estarão no{' '}
              <span className="text-yellow-400">2º dia</span> do seu ENEM!
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-blue-200 leading-relaxed max-w-3xl mx-auto"
            >
              O <strong className="text-yellow-400">DNA do ENEM</strong> é o sistema de revisão que transforma o medo de esquecer o conteúdo na <span className="text-blue-300">confiança de que você está usando seu tempo da forma mais inteligente possível</span>
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                QUERO GARANTIR MINHA APROVAÇÃO
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nova Seção: A reta final te deixa assim? */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              A <span className="text-red-400">reta final</span> te deixa assim?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Se você se identifica com algum desses pontos, o <span className="text-yellow-400 font-semibold">DNA do ENEM</span> é para você
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 h-full hover:bg-slate-700 transition-colors duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Frown className="w-8 h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-red-400 text-xl">Confuso e Perdido</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    É tanto conteúdo que você não sabe por onde começar a revisar e o que realmente importa.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 h-full hover:bg-slate-700 transition-colors duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-orange-400" />
                  </div>
                  <CardTitle className="text-orange-400 text-xl">Medo de "Dar Branco"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    A ansiedade de esquecer tudo na hora da prova te paralisa e rouba sua confiança.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700 h-full hover:bg-slate-700 transition-colors duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookX className="w-8 h-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-purple-400 text-xl">Estudo Genérico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    Você consome horas de videoaulas e PDFs, mas não sente que está evoluindo de forma estratégica.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seção DNA do ENEM Atualizada */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              A solução é dominar o <span className="text-yellow-400">DNA do ENEM</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
            >
              O único sistema de revisão que funciona como um <span className="text-yellow-400 font-semibold">filtro estratégico</span>, focando no que <span className="text-yellow-400 font-bold">REALMENTE CAI</span> em Ciências da Natureza e Matemática
            </motion.p>
          </motion.div>

          <motion.div 
            className="border-2 border-dashed border-blue-400 rounded-lg p-8 mb-12 bg-black/20 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Target className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <p className="text-blue-300 font-semibold text-lg text-center">ESPAÇO PARA IMAGEM DO SISTEMA COMPLETO</p>
            <p className="text-blue-200 text-sm mt-2 text-center">Visão geral dos dois pilares: LML + Conceitos Vitais</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-600 h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <CardTitle className="text-2xl text-green-400">
                    Listas de Mapeamento de Lacunas (LML)
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Questões criteriosamente selecionadas por um mentor com <span className="text-yellow-400 font-bold">829 de média</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Diagnostica suas principais dificuldades</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Corrige lacunas específicas do seu conhecimento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">645 questões, todas com resolução detalhada</span>
                  </div>
                  
                  <div className="border-2 border-dashed border-yellow-400 rounded-lg p-6 mt-6 bg-black/20">
                    <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                    <p className="text-yellow-300 font-semibold text-center">ESPAÇO PARA PREVIEW DAS LML</p>
                    <p className="text-blue-200 text-sm mt-2 text-center">Exemplo de questões e layout</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-600 h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-blue-400">
                    Conceitos Vitais
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Resumos curtos e diretos dos tópicos com <span className="text-yellow-400 font-bold">maior incidência</span> na prova
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Conteúdo essencial condensado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Baseado em análise estatística das provas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Revisão rápida e eficiente</span>
                  </div>
                  
                  <div className="border-2 border-dashed border-blue-400 rounded-lg p-6 mt-6 bg-black/20">
                    <Brain className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <p className="text-blue-300 font-semibold text-center">ESPAÇO PARA PREVIEW DOS CONCEITOS</p>
                    <p className="text-blue-200 text-sm mt-2 text-center">Exemplo de resumos e formatação</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Nova Seção da Plataforma */}
          <motion.div 
            className="mt-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="bg-slate-800 border-slate-600 max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-purple-400">
                  Plataforma Inteligente de Acompanhamento
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Tecnologia avançada para maximizar seus resultados
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <PieChart className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">Registro automático do desempenho em cada lista</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">Gráficos detalhados de evolução</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">Análises personalizadas baseadas no seu desempenho</span>
                    </div>
                  </div>
                  
                  <div className="border-2 border-dashed border-purple-400 rounded-lg p-6 bg-black/20">
                    <Monitor className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                    <p className="text-purple-300 font-semibold text-center">ESPAÇO PARA PRINTS DA PLATAFORMA</p>
                    <p className="text-purple-200 text-sm mt-2 text-center">Interface e gráficos de desempenho</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Seção de Benefícios Atualizada */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              A Transformação que Você Vai Viver
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Do medo e ansiedade para a <span className="text-green-400 font-bold">confiança total</span> na sua aprovação
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-green-900 to-green-800 border-green-700 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                  <CardTitle className="text-green-300 text-xl">Foco Laser</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-100 text-center">
                    Estude tudo que importa para sua nota
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-blue-900 to-blue-800 border-blue-700 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-blue-300 text-xl">Otimize seu tempo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 text-center">
                    Máximo resultado com o mínimo de tempo investido
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-purple-900 to-purple-800 border-purple-700 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-purple-300 text-xl">Confiança Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100 text-center">
                    Chegue na prova sabendo que revisou os conteúdos que estarão nela
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-center max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Target className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">🎯 O Resultado Final</h3>
            <p className="text-green-100 text-lg leading-relaxed">
              Você vai <strong>transformar o medo de esquecer conteúdo</strong> na <strong>confiança de que está usando seu tempo da forma mais inteligente possível</strong> para garantir sua aprovação no ENEM 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção de Prova Social */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Criado por Quem <span className="text-yellow-400">Realmente Sabe</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="bg-slate-800 border-slate-600">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="border-2 border-dashed border-yellow-400 rounded-full p-8 bg-black/20 flex-shrink-0">
                    <Users className="w-16 h-16 text-yellow-400 mx-auto" />
                    <p className="text-yellow-300 font-semibold text-center mt-2">FOTO DO MENTOR</p>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                      <Trophy className="w-6 h-6 text-yellow-400" />
                      <span className="text-2xl font-bold text-yellow-400">829 de média</span>
                      <span className="text-gray-300">no ENEM</span>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      O DNA do ENEM foi desenvolvido por um mentor especialista que não apenas <strong className="text-yellow-400">domina o conteúdo</strong>, mas também <strong className="text-blue-300">entende exatamente como a prova funciona</strong>. Cada questão das LMLs e cada Conceito Vital foram <strong className="text-green-400">criteriosamente selecionados</strong> com base em anos de análise das provas do ENEM.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <div className="border-2 border-dashed border-purple-400 rounded-lg p-8 bg-black/20 h-full">
                <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <p className="text-purple-300 font-semibold text-center">ESPAÇO PARA DEPOIMENTO 1</p>
                <p className="text-purple-200 text-sm mt-2 text-center">Aluno aprovado com o método</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="border-2 border-dashed border-purple-400 rounded-lg p-8 bg-black/20 h-full">
                <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <p className="text-purple-300 font-semibold text-center">ESPAÇO PARA DEPOIMENTO 2</p>
                <p className="text-purple-200 text-sm mt-2 text-center">Aluno aprovado com o método</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seção de CTA Principal Atualizada */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Garanta Sua Aprovação AGORA
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-12 text-gray-300"
            >
              Não deixe para depois. O ENEM está chegando e cada dia perdido é uma oportunidade a menos de garantir sua vaga na universidade dos seus sonhos.
            </motion.p>

            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-12"
              variants={staggerChildren}
            >
              {/* DNA do ENEM */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-slate-800 border-2 border-blue-500/50 backdrop-blur-sm h-full hover:border-blue-400 transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-white mb-4">DNA do ENEM</CardTitle>
                    <div className="text-5xl font-bold text-white mb-2">R$ 57</div>
                    <div className="text-lg text-gray-300 mb-6">Investimento único</div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-left">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">645 questões com resolução detalhada</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Conceitos Vitais dos tópicos mais cobrados</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Plataforma com registro de desempenho</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Gráficos e análises personalizadas</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Acesso imediato e vitalício</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Garantia de 7 dias</span>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button 
                      size="lg" 
                      className="w-full bg-white hover:bg-gray-100 text-black font-bold py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      QUERO O DNA DO ENEM
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* COMBO */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-slate-800 border-2 border-yellow-500 shadow-lg shadow-yellow-500/20 h-full relative overflow-hidden hover:border-yellow-400 hover:shadow-yellow-400/30 transition-all duration-300">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-black font-bold px-3 py-1">
                      MAIS VENDIDO
                    </Badge>
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-white mb-4">
                      COMBO: DNA + Padrões do ENEM
                    </CardTitle>
                    <div className="text-5xl font-bold text-white mb-2">R$ 97</div>
                    <div className="text-lg text-gray-300 mb-6">Investimento único</div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-left">
                    <div className="text-yellow-300 font-semibold mb-3">✅ TUDO DO DNA DO ENEM +</div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Curso Padrões do ENEM completo</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Mais de 30 aulas de questões-modelo</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">100+ questões-modelo que mais aparecem</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Listas de questões práticas</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Método completo de preparação</span>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button 
                      size="lg" 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Trophy className="w-5 h-5 mr-2" />
                      QUERO O COMBO COMPLETO
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 text-gray-300"
            >
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Compra 100% segura</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Garantia de 7 dias</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Perguntas Frequentes
            </h2>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    O DNA do ENEM funciona para todos os níveis?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Sim! O sistema foi desenvolvido tanto para quem está começando quanto para quem já tem uma base sólida. As LML identificam exatamente onde você precisa melhorar, independente do seu nível atual.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    Quanto tempo preciso dedicar por dia?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    O DNA do ENEM foi projetado para ser eficiente. Com apenas 2-3 horas por dia de estudo focado, você terá resultados muito superiores a quem estuda 8 horas de forma desorganizada.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    E se eu não conseguir os resultados prometidos?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    O material é atualizado para o ENEM 2025?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Absolutamente! Todo o conteúdo foi revisado e atualizado especificamente para o ENEM 2025, incluindo as últimas tendências e mudanças no exame.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <AlertTriangle className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ⚠️ ÚLTIMA CHANCE
              </h2>
              <p className="text-xl text-red-100 leading-relaxed">
                O ENEM está chegando. Cada dia que passa é uma oportunidade perdida. <strong>Não deixe o medo de esquecer conteúdo sabotar sua aprovação.</strong>
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-red-600 font-bold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6"
              >
                <Zap className="w-6 h-6 mr-3" />
                SIM, QUERO GARANTIR MINHA APROVAÇÃO
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 text-red-100"
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Acesso imediato após a compra</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Método testado e aprovado</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App

