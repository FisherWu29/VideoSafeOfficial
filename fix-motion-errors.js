import fs from 'fs';
import path from 'path';

// 要修复的组件目录
const componentsDir = path.join(process.cwd(), 'src', 'components');

// 获取所有.vue文件
const vueFiles = fs.readdirSync(componentsDir).filter(file => file.endsWith('.vue'));

// 修复每个文件
vueFiles.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. 移除viewport属性
  content = content.replace(/viewport=\{\{[^}]+\}\}/g, '');
  
  // 2. 移除未使用的变量声明（支持多行）
  content = content.replace(/const fadeInUp = \{[\s\S]+?\};\n/g, '');
  content = content.replace(/const staggerContainer = \{[\s\S]+?\};\n/g, '');
  
  // 3. 移除variants属性
  content = content.replace(/variants=\{[^}]+\}/g, '');
  
  // 4. 修复generateStars函数中的未使用参数
  content = content.replace(/\(filled, index\)/g, '(_, index)');
  
  // 5. 移除未使用的导入
  content = content.replace(/import \{ motion \} from 'framer-motion';/g, '');
  
  // 6. 移除motion组件，使用普通标签
  content = content.replace(/<motion\.div/g, '<div');
  content = content.replace(/<\/motion\.div>/g, '</div>');
  content = content.replace(/<motion\.h1/g, '<h1');
  content = content.replace(/<\/motion\.h1>/g, '</h1>');
  content = content.replace(/<motion\.p/g, '<p');
  content = content.replace(/<\/motion\.p>/g, '</p>');
  content = content.replace(/initial="hidden"/g, '');
  content = content.replace(/whileInView="visible"/g, '');
  
  // 写入修复后的内容
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${file}`);
});

console.log('All files fixed!');
