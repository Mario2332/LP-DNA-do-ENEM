import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Target, BookOpen, TrendingUp, Clock, Star, Users, Award, ArrowRight, Play, Download, Zap, Brain, Trophy, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="bg-yellow-500 text-black font-bold px-4 py-2 text-sm">
                🔥 RETA FINAL DO ENEM 2024
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Pare de Estudar
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> Tudo</span>
              <br />
              Comece a Estudar o que
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> Importa</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              O <strong className="text-yellow-400">DNA do ENEM</strong> é o sistema de revisão que transforma o medo de esquecer conteúdo na <strong className="text-blue-400">confiança de que você está usando seu tempo da forma mais inteligente possível</strong>
            </motion.p>

            {/* Espaço para Imagem Principal do Produto */}
            <motion.div 
              variants={fadeInUp}
              className="mb-8 p-8 border-2 border-dashed border-yellow-400/50 rounded-lg bg-yellow-400/5"
            >
              <div className="text-yellow-400 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium">ESPAÇO PARA IMAGEM PRINCIPAL DO PRODUTO</p>
                <p className="text-xs text-gray-400 mt-1">Mockup do material, capas dos livros ou interface digital</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="mr-2 h-5 w-5" />
                QUERO GARANTIR MINHA APROVAÇÃO
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full"
              >
                <Play className="mr-2 h-4 w-4" />
                Ver Como Funciona
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contador de Urgência */}
      <section className="bg-red-600 py-6">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-4">⏰ FALTAM APENAS:</h3>
            <div className="flex justify-center gap-4 text-2xl font-bold">
              <div className="bg-white/20 px-4 py-2 rounded">
                <div>{timeLeft.days}</div>
                <div className="text-xs">DIAS</div>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded">
                <div>{timeLeft.hours}</div>
                <div className="text-xs">HORAS</div>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded">
                <div>{timeLeft.minutes}</div>
                <div className="text-xs">MIN</div>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded">
                <div>{timeLeft.seconds}</div>
                <div className="text-xs">SEG</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-8">
              Você Está Estudando <span className="text-red-400">Errado</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-red-900/20 border-red-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Tempo Perdido</h3>
                  <p className="text-gray-300">Estudando conteúdos que não caem na prova</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-900/20 border-red-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Sem Direção</h3>
                  <p className="text-gray-300">Não sabe o que priorizar na reta final</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-900/20 border-red-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Ansiedade</h3>
                  <p className="text-gray-300">Medo de esquecer algo importante</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed">
              <strong className="text-red-400">A verdade é:</strong> 80% do que você está estudando <strong>NÃO VAI CAIR</strong> na sua prova. 
              Enquanto isso, você está deixando de lado os 20% que <strong className="text-yellow-400">REALMENTE IMPORTAM</strong> para sua aprovação.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Apresentamos o <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">DNA do ENEM</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                O único sistema de revisão que funciona como um <strong className="text-blue-400">filtro estratégico</strong>, 
                focando exclusivamente no que <strong className="text-yellow-400">REALMENTE CAI</strong> em Ciências da Natureza e Matemática
              </p>
            </motion.div>

            {/* Espaço para Imagem do Sistema */}
            <motion.div 
              variants={fadeInUp}
              className="mb-12 p-8 border-2 border-dashed border-blue-400/50 rounded-lg bg-blue-400/5"
            >
              <div className="text-blue-400 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium">ESPAÇO PARA IMAGEM DO SISTEMA COMPLETO</p>
                <p className="text-xs text-gray-400 mt-1">Visão geral dos dois pilares: LML + Conceitos Vitais</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-yellow-500/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-yellow-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Listas de Mapeamento de Lacunas (LML)</CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    Questões criteriosamente selecionadas por um mentor com <strong className="text-yellow-400">829 de média</strong>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Diagnóstica suas principais dificuldades</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Corrige lacunas específicas do seu conhecimento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Foca apenas no que você precisa melhorar</span>
                    </li>
                  </ul>
                  
                  {/* Espaço para Imagem das LML */}
                  <div className="mt-6 p-4 border border-dashed border-yellow-400/30 rounded bg-yellow-400/5">
                    <div className="text-yellow-400 text-center text-sm">
                      <BookOpen className="w-6 h-6 mx-auto mb-2" />
                      <p className="font-medium">ESPAÇO PARA PREVIEW DAS LML</p>
                      <p className="text-xs text-gray-400">Exemplo de questões e layout</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-blue-500/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Conceitos Vitais</CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    Resumos curtos e diretos dos tópicos com <strong className="text-blue-400">maior incidência</strong> na prova
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Conteúdo essencial condensado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Baseado em análise estatística das provas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Revisão rápida e eficiente</span>
                    </li>
                  </ul>

                  {/* Espaço para Imagem dos Conceitos Vitais */}
                  <div className="mt-6 p-4 border border-dashed border-blue-400/30 rounded bg-blue-400/5">
                    <div className="text-blue-400 text-center text-sm">
                      <Brain className="w-6 h-6 mx-auto mb-2" />
                      <p className="font-medium">ESPAÇO PARA PREVIEW DOS CONCEITOS</p>
                      <p className="text-xs text-gray-400">Exemplo de resumos e formatação</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                A Transformação que Você Vai Viver
              </h2>
              <p className="text-xl text-gray-300">
                Do medo e ansiedade para a <strong className="text-green-400">confiança total</strong> na sua aprovação
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Foco Laser</h3>
                  <p className="text-gray-300">Estude apenas o que realmente importa para sua nota</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Tempo Otimizado</h3>
                  <p className="text-gray-300">Máximo resultado com o mínimo de tempo investido</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Confiança Total</h3>
                  <p className="text-gray-300">Chegue na prova sabendo que está preparado</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Aprovação Garantida</h3>
                  <p className="text-gray-300">Sistema testado e aprovado por centenas de alunos</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border-red-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Resultados Rápidos</h3>
                  <p className="text-gray-300">Veja sua evolução já nas primeiras semanas</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border-indigo-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Método Exclusivo</h3>
                  <p className="text-gray-300">Estratégia única desenvolvida por especialista</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🎯 O Resultado Final
                </h3>
                <p className="text-xl text-green-100 leading-relaxed">
                  Você vai <strong>transformar o medo de esquecer conteúdo</strong> na <strong>confiança de que está usando seu tempo da forma mais inteligente possível</strong> para garantir sua aprovação no ENEM 2024.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Criado por Quem <span className="text-yellow-400">Realmente Sabe</span>
              </h2>
              
              <Card className="bg-white/10 border-yellow-500/30 backdrop-blur-sm p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Espaço para Foto do Mentor */}
                  <div className="w-32 h-32 border-2 border-dashed border-yellow-400/50 rounded-full bg-yellow-400/5 flex items-center justify-center flex-shrink-0">
                    <div className="text-yellow-400 text-center">
                      <Users className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs font-medium">FOTO DO MENTOR</p>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-6 h-6 text-yellow-400" />
                      <span className="text-3xl font-bold text-yellow-400">829 de média</span>
                      <span className="text-white">no ENEM</span>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      O DNA do ENEM foi desenvolvido por um mentor especialista que não apenas <strong className="text-yellow-400">domina o conteúdo</strong>, 
                      mas também <strong className="text-blue-400">entende exatamente como a prova funciona</strong>. 
                      Cada questão das LML e cada Conceito Vital foi <strong className="text-green-400">criteriosamente selecionado</strong> 
                      com base em anos de análise das provas do ENEM.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Espaço para Depoimentos */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border-2 border-dashed border-purple-400/50 rounded-lg bg-purple-400/5">
                <div className="text-purple-400 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">ESPAÇO PARA DEPOIMENTO 1</p>
                  <p className="text-xs text-gray-400 mt-1">Aluno aprovado com o método</p>
                </div>
              </div>
              
              <div className="p-6 border-2 border-dashed border-purple-400/50 rounded-lg bg-purple-400/5">
                <div className="text-purple-400 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">ESPAÇO PARA DEPOIMENTO 2</p>
                  <p className="text-xs text-gray-400 mt-1">Aluno aprovado com o método</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-black mb-6">
              Garanta Sua Aprovação AGORA
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Não deixe para depois. O ENEM está chegando e cada dia perdido é uma oportunidade a menos de garantir sua vaga na universidade dos seus sonhos.
            </motion.p>

            <motion.div variants={fadeInUp} className="bg-black/10 p-8 rounded-2xl mb-8">
              <div className="text-black">
                <div className="text-4xl font-bold mb-2">R$ 197</div>
                <div className="text-lg">Investimento único</div>
                <div className="text-sm mt-2">💳 Parcelamento disponível</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
              >
                <Trophy className="mr-3 h-6 w-6" />
                QUERO GARANTIR MINHA APROVAÇÃO
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <p className="text-black/70 text-sm">
                🔒 Compra 100% segura | ⚡ Acesso imediato | 🎯 Garantia de 7 dias
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
              Perguntas Frequentes
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="bg-white/5 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">O DNA do ENEM funciona para todos os níveis?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Sim! O sistema foi desenvolvido tanto para quem está começando quanto para quem já tem uma base sólida. 
                    As LML identificam exatamente onde você precisa melhorar, independente do seu nível atual.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Quanto tempo preciso dedicar por dia?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    O DNA do ENEM foi projetado para ser eficiente. Com apenas 2-3 horas por dia de estudo focado, 
                    você terá resultados muito superiores a quem estuda 8 horas de forma desorganizada.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">E se eu não conseguir os resultados prometidos?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, 
                    devolvemos 100% do seu investimento, sem perguntas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">O material é atualizado para o ENEM 2024?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Absolutamente! Todo o conteúdo foi revisado e atualizado especificamente para o ENEM 2024, 
                    incluindo as últimas tendências e mudanças no exame.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6">
              ⚠️ ÚLTIMA CHANCE
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-xl text-red-100 mb-8">
              O ENEM está chegando. Cada dia que passa é uma oportunidade perdida. 
              <strong> Não deixe o medo de esquecer conteúdo sabotar sua aprovação.</strong>
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-red-600 font-bold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="mr-3 h-6 w-6" />
                SIM, QUERO GARANTIR MINHA APROVAÇÃO
              </Button>
              
              <p className="text-red-100 text-sm mt-4">
                ✅ Acesso imediato após a compra | 🎯 Método testado e aprovado
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-gray-400">
            <p className="mb-4">© 2024 DNA do ENEM. Todos os direitos reservados.</p>
            <p className="text-sm">
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

