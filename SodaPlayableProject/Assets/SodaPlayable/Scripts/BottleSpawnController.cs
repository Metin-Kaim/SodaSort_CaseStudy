using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Assets.SodaPlayable.Scripts
{
    public class BottleSpawnController : MonoBehaviour
    {
        [SerializeField] private BottleHandler bottlePrefab;

        public Vector2Int gridSize;
        public float xDistance;
        public float yDistance;

        public List<BottleData> bottleDatas;

        private byte _counter;

        private void Start()
        {
            for (int y = 0; y < gridSize.y; y++)
            {
                for (int x = 0; x < gridSize.x; x++)
                {
                    BottleHandler bottleHandler = Instantiate(bottlePrefab, new Vector2(x * xDistance, -y * yDistance), Quaternion.identity, transform);
                    bottleHandler.Init(bottleDatas[_counter], (byte)(_counter % gridSize.x));
                    _counter++;
                }
            }
        }
    }

    [System.Serializable]
    public struct BottleData
    {
        public ColorType color1;
        public ColorType color2;
        public ColorType color3;
        public ColorType color4;
    }
}