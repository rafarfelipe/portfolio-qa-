"use client";

import { Send } from "lucide-react";
import { contactInfo } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-center mb-16">
          <span className="text-gradient"> Vamos Conversar? </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Estou em busca de oportunidades como{" "}
              <span className="text-primary font-semibold">Analista de QA Júnior</span>.
              Se você está procurando alguém dedicado a garantir qualidade de software,
              vamos conversar!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 bg-background border border-border rounded-xl hover:border-primary/50 hover:-translate-x-2 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Code Block Visual */}
          <div className="bg-background border border-border rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-muted-foreground font-mono text-sm">contact.js</span>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="font-mono text-sm">
                <span className="text-secondary">const</span>{" "}
                <span className="text-foreground">rafael</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-muted-foreground">{`{`}</span>
                {"\n"}
                {"  "}
                <span className="text-muted-foreground">nome:</span>{" "}
                <span className="text-green-400">&quot;Rafael Felipe&quot;</span>,
                {"\n"}
                {"  "}
                <span className="text-muted-foreground">cargo:</span>{" "}
                <span className="text-green-400">&quot;QA Engineer&quot;</span>,
                {"\n"}
                {"  "}
                <span className="text-muted-foreground">local:</span>{" "}
                <span className="text-green-400">&quot;Praia Grande, SP&quot;</span>,
                {"\n"}
                {"  "}
                <span className="text-muted-foreground">status:</span>{" "}
                <span className="text-green-400">&quot;Open to work&quot;</span>,
                {"\n"}
                {"  "}
                <span className="text-muted-foreground">contato:</span>{" "}
                <span className="text-muted-foreground">{`{`}</span>
                {"\n"}
                {"    "}
                <span className="text-muted-foreground">email:</span>{" "}
                <span className="text-green-400">&quot;rafarfelipe91@gmail.com&quot;</span>,
                {"\n"}
                {"    "}
                <span className="text-muted-foreground">phone:</span>{" "}
                <span className="text-green-400">&quot;+55 (13) 99117-5828&quot;</span>
                {"\n"}
                {"  }"},
                {"\n"}
                {"  "}
                <span className="text-muted-foreground">disponivel:</span>{" "}
                <span className="text-accent">true</span>
                {"\n"}
                <span className="text-muted-foreground">{`}`}</span>;
                {"\n\n"}
                <span className="text-muted-foreground">// Vamos conectar!</span>
                {"\n"}
                <span className="text-foreground">rafael</span>
                <span className="text-muted-foreground">.</span>
                <span className="text-primary">conectar</span>
                <span className="text-muted-foreground">();</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
