import { josa } from 'es-hangul';

export function generateApology(당사자: string, 피해자: string, 행위: string) {
  return `안녕하세요
${당사자}입니다.

${josa(행위, '으로/로')} 불편을 느끼신 모든 분들께 진심으로 사과드립니다.

현재 사회적으로도 이슈가 되고 있는 사항을
제대로 인지하지 못하고
문제를 제기하지 않은 저의 무지함에 깊이 반성하고 있습니다.
연기를 하며 더 잘하고 싶은 제 욕심에
${josa('피해자', '와/과')} 그 가족들에게 상처를 드렸습니다.

이번 기회로 다시 한번 저를 돌아보고
${피해자}의 노고와 헌신에
더욱 소중함과 감사함을 느끼며 살겠습니다.
보다 더 나은 사람이 될 수 있도록 노력하겠습니다.

여러분들이 주시는 사랑과 관심에 보답하지 못하고
실망시켜 드려 정말 죄송합니다.

이 글을 읽어주신 모든 분들께 감사드립니다.`;
}