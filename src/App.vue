<template>
  <div class="background">
    <div class="panel">
      <h1>TCKN & VKN Generator</h1>

      <!-- TCKN Üretim Paneli -->
      <div class="section">
        <h2>TCKN</h2>
        <textarea v-model="tckns" readonly></textarea>
        <div class="actions">
          <button @click="generateTCKNs">Generate TCKN</button>
          <button @click="copyTCKNs">Copy TCKN</button>
        </div>
      </div>

      <!-- VKN Üretim Paneli -->
      <div class="section">
        <h2>VKN</h2>
        <textarea v-model="vkns" readonly></textarea>
        <div class="actions">
          <button @click="generateVKNs">Generate VKN</button>
          <button @click="copyVKNs">Copy VKN</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
import { generateTCKN, generateVKN } from './tckn-vkn-generator.js';

// TCKN ve VKN için reactive değerler
const tckns = ref('');
const vkns = ref('');

// TCKN üretme fonksiyonu
const generateTCKNs = () => {
  tckns.value = Array.from({ length: 1}, () => generateTCKN()).join('\n');
};

// VKN üretme fonksiyonu
const generateVKNs = () => {
  vkns.value = Array.from({ length: 1 }, () => generateVKN()).join('\n');
};

// TCKN kopyalama fonksiyonu
const copyTCKNs = () => {
  navigator.clipboard.writeText(tckns.value);
  alert('TCKNs copied to clipboard!');
};

// VKN kopyalama fonksiyonu
const copyVKNs = () => {
  navigator.clipboard.writeText(vkns.value);
  alert('VKNs copied to clipboard!');
};
</script>

<style scoped>
.background {
  background-color: #f0f8ff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 400px;
  text-align: center;
}

h1 {
  color: #333;
}

.section {
  margin: 20px 0;
}

textarea {
  width: 100%;
  height: 80px;
  font-family: monospace;
  text-align: center;
  margin-bottom: 10px;
}

.actions {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

