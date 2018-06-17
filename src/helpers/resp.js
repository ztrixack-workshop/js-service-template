const success = (code, data) => {
  let status = 'unknown'
  switch (code) {
    case 200:
      // ใช้เมื่อมี request ดึงข้อมูลแล้ว server มีข้อมูลให้ตอบกลับ
      // ใช้เมื่อมี request อัพเดตข้อมูลแล้วอัพเดตสำเร็จ
      status = 'OK'
      break

    case 201:
      // ใช้เมื่อมี request สร้างข้อมูลแล้ว server สร้างข้อมูลสำเร็จ
      status = 'Created'
      break

    case 204:
      // ใช้เมื่อมี request ลบข้อมูลแล้ว server ลบข้อมูลสำเร็จ และฝั่ง client ไม่จำเป็นต้องทำอะไรต่อ
      status = 'No Content'
      break

    case 205:
      // ใช้เมื่อมี request ลบข้อมูลแล้ว server ลบข้อมูลสำเร็จ และฝั่ง client ต้องทำการลบข้อมูลฝั่ง client หรือ reset การแสดงผลใหม่
      status = 'Reset Content'
      break
  }

  return {
    code,
    status,
    data,
  }
}

const clientError = (code, message) => {
  let status = 'unknown'
  switch (code) {
    case 400:
      // ใช้เมื่อมี request ที่ให้ข้อมูลเพื่อใช้ในการทำงานของฝั่ง server ไม่ครบ เช่น ต้องการ login แต่ไม่ส่งตัวแปรข้อมูล password เข้ามาใน request 
      // ถ้าส่ง empty string ไม่ถือว่าเป็น Bad request
      status = 'Bad Request'
      break

    case 401:
      // ใช้เมื่อ request นั้น ๆ ไม่มี token แนบมาด้วย หรือไม่มี session ในการเข้าสู่ระบบ (ในกรณีที่ API server ใช้ session sign-in)
      // ใช้เมื่อ request นั้นต้องการ sign-in เข้าสู่ระบบ โดยให้ username และ password แล้ว แต่ username หรือ password ไม่ถูกต้อง
      status = 'Unauthorized'
      break

    case 403:
      // ใช้เมื่อ request นั้น ๆ มี token แนบมาด้วย หรือมี session ในการเข้าสู่ระบบ แต่ไม่มีสิทธิ์เพียงพอจะเข้าถึง API นั้น ๆ
      status = 'Forbidden'
      break

    case 404:
      // ใช้เมื่อมี request ดึงข้อมูลแล้ว server หาข้อมูลไม่พบ
      status = 'Not Found'
      break

    case 405:
      // ใช้เมื่อมี request ด้วยรูปแบบคำสั่งที่ server ไม่รองรับ
      status = 'Method Not Allowed'
      break

    case 408:
      // ใช้เมื่อมี request ดึงข้อมูลแล้ว server ไม่ตอบสนอง หรือใช้เวลานานในการเชื่อมต่อนานเกินไป
      status = 'Request Timeout'
      break

    case 413:
      // ใช้เมื่อมี request ดึงข้อมูลใหญ่เกินกว่าที่จะส่งด้วยโพรโทคอลปัจจุบันได้
      status = 'Request Entity Too Large'
      break

    case 423:
      // ใช้เมื่อมี request ดึงข้อมูลที่ถูกล็อกอยู่
      status = 'Locked'
      break
  }

  return {
    code,
    status,
    message,
  }
}

const serverError = (code, message) => {
  let status = 'unknown'
  switch (code) {
    case 500:
      // ใช้เมื่อ API มี error ที่เกิดจากการทำงานที่ผิดพลาดทางฝั่ง server เมื่อตรวจจับได้
      status = 'Internal Server Error'
      break

    case 501:
      // ใช้เมื่อ API มีคำสั่งร้องขอที่ Server ไม่เข้าใจ หรือไม่สามารถทำงานตามคำสั่งนั้น
      status = 'Not Implemented'
      break

    case 502:
      // ใช้เมื่อได้รับ Error จากอีก Server หนึ่ง หรือมีปัญหาในการรับส่งข้อมูลกันระหว่าง Server
      status = 'Bad Gateway'
      break

    case 503:
      // ใช้เมื่อ API เข้าสู่โหมด maintenance หรือ API มีจำนวนการใช้งานสูงเกินไป ไม่สามารถให้บริการได้ชั่วคราว
      status = 'Service Unavailable'
      break
  }

  return {
    code,
    status,
    message,
  }
}

export default {
  success,
  clientError,
  serverError,
}